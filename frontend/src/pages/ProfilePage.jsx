import { useAuth } from "../context/AuthContext";

function ProfilePage(params) {
  const { user } = useAuth();
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default ProfilePage;
