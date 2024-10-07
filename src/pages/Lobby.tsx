import React, { useEffect, useState } from "react";
import { fetchLobbyData } from "../services/api";
import { LobbyData, Game, Studio, Tag } from "../types/Game";

const Lobby: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [studios, setStudios] = useState<Studio[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("EUR");
  const [selectedTag, setSelectedTag] = useState<number | null>(null);

  useEffect(() => {
    console.log("Lobby component mounted");
    const loadLobbyData = async () => {
      try {
        const data: LobbyData = await fetchLobbyData();
        setGames(data.games);
        setStudios(data.studios);
        setTags(data.tags);
        console.log("Lobby data fetched", data);
      } catch (error) {
        console.error("Error fetching lobby data:", error);
      }
    };

    loadLobbyData();
  }, []);

  return (
    <div>
      <h1>Casino Lobby</h1>
      <p>Check console for debug logs</p>{" "}
      {/* Temporary text to verify rendering */}
    </div>
  );
};

export default Lobby;
