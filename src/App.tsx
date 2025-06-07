// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./layout/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Biodata } from "./features/biodata/Biodata";
import { QuizPG } from "./features/soal_pg/SoalPG";
import { QuizEssay } from "./features/soal_essay/SoalEssay";
import { LandingPage } from "./features/landing/LandingPage";
import RedirectPage from "./components/redirect";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/redirect" element={<RedirectPage/>} />
          <Route
            path="/biodata"
            element={
              <ProtectedRoute>
                <Biodata />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz-pg"
            element={
              <ProtectedRoute>
                <QuizPG />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz-essay"
            element={
              <ProtectedRoute>
                <QuizEssay />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;