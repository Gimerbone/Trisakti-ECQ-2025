// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from './ProtectedRoute.module.css'

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/" replace />
  } else {
    return (
        <div className={styles.root}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
  }
};

export default ProtectedRoute;