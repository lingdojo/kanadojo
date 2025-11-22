import PostWrapper from '@/shared/components/PostWrapper';
import patchNotes from '@/shared/lib/patchNotes';

const PatchNotes = () => {
  return <PostWrapper textContent={patchNotes} />;
};

export default PatchNotes;

