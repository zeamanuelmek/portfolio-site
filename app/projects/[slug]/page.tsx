'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { ProjectHero, ProjectSection, ImageGallery, Lightbox } from '@/components/project';
import { getProjectBySlug, type ProjectImage } from '@/lib/data/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <ProjectHero project={project} />

      {/* Project Sections */}
      {project.sections.map((section, index) => (
        <ProjectSection
          key={index}
          title={section.title}
          variant={index % 2 === 0 ? 'default' : 'alt'}
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 leading-relaxed text-lg">
              {section.content}
            </p>
          </div>

          {section.images && section.images.length > 0 && (
            <div className="mt-8">
              <ImageGallery
                images={section.images}
                columns={section.layout === 'three-column' ? 3 : section.layout === 'two-column' ? 2 : 1}
                onImageClick={handleImageClick}
              />
            </div>
          )}
        </ProjectSection>
      ))}

      {/* Additional Images Gallery */}
      {project.images.length > 0 && (
        <ProjectSection title="Project Gallery" variant="default">
          <ImageGallery
            images={project.images}
            columns={2}
            onImageClick={handleImageClick}
          />
        </ProjectSection>
      )}

      {/* Lightbox */}
      <Lightbox
        images={[
          ...project.sections.flatMap((s) => s.images || []),
          ...project.images,
        ]}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
