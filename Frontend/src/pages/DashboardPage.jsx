import { useNavigate } from "react-router";
import { useUser } from "@clerk/react";
import { useState } from "react";

import {
  useActiveSessions,
  useCreateSession,
} from "../hooks/useSessions";

import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import ActiveSessions from "../components/ActiveSessions";
import CreateSessionModal from "../components/CreateSessionModal";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({
    problem: "",
    difficulty: "",
  });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } =
    useActiveSessions();

  const activeSessions = activeSessionsData?.sessions || [];

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const isUserInSession = (session) => {
    if (!user?.id) return false;

    return (
      session.host?.clerkId === user.id ||
      session.participant?.clerkId === user.id
    );
  };

  return (
    <>
      <div className="min-h-screen bg-[#0f172a]">
        <Navbar />

        <WelcomeSection
          onCreateSession={() => setShowCreateModal(true)}
        />

        <div className="max-w-7xl mx-auto px-6 py-8">
          <ActiveSessions
            sessions={activeSessions}
            isLoading={loadingActiveSessions}
            isUserInSession={isUserInSession}
          />
        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;