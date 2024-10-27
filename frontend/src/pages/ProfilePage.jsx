import { useAuth } from "../context/AuthContext";

function ProfilePage(params) {
  const { user } = useAuth();
  return <div>{JSON.stringify(user, null,2)}</div>;
}

export default ProfilePage;
