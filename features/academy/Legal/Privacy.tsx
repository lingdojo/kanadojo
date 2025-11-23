import PostWrapper from '@/shared/components/PostWrapper';
import privacyPolicy from '@/shared/lib/legal/privacyPolicy';

const PrivacyPolicy = () => {
  return <PostWrapper textContent={privacyPolicy} />;
};

export default PrivacyPolicy;
