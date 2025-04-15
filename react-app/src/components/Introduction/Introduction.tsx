// AnyComponent.tsx
import { useAppContext } from '../../contexts/AppContext';

const UserInfo = () => {
  const { user, setUser } = useAppContext();

  return (
    <div>
      <p>Welcome, {user || 'Guest'}!</p>
      <button onClick={() => setUser('Alice')}>Set User</button>
    </div>
  );
};
