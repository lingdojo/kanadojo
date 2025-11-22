import PostWrapper from '@/shared/components/PostWrapper';
import termsOfService from '@/shared/lib/legal/termsOfService';

const TermsOfService = () => {
  return <PostWrapper textContent={termsOfService} />;
};

export default TermsOfService;
