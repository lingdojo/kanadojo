import ContentLayout from '@/shared/components/ContentLayout';
import PostWrapper from '@/shared/components/PostWrapper';

export interface Release {
  id: number;
  tag_name: string;
  published_at: string;
  body: string;
}

const PatchNotes = async () => {
  const data = await fetch(
    'https://api.github.com/repos/lingdojo/kana-dojo/releases?per_page=5'
  );
  const patches: Release[] = await data.json();

  return (
    <ContentLayout>
      {patches && patches.length > 0 ? (
        patches.map((release) => (
          <PostWrapper
            key={release.id}
            textContent={release.body}
            tag={release.tag_name}
            date={release.published_at}
          />
        ))
      ) : (
        <div className="text-center py-10 text-[var(--secondary-color)]">
          No releases available yet. Check back soon for updates!
        </div>
      )}
    </ContentLayout>
  );
};

export default PatchNotes;
