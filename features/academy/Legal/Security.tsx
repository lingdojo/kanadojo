import PostWrapper from '@/shared/components/PostWrapper';
import securityPolicy from '@/shared/lib/legal/securityPolicy';

const SecurityPolicy = () => {
  return <PostWrapper textContent={securityPolicy} />;
};

export default SecurityPolicy;
