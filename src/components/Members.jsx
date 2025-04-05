import { useState } from "react";
import { Paper, Typography } from "@mui/material";
import { membersList } from "../constants/membersList";
import SearchBar from "./SearchBar";
import MemberList from "./MemberList";
import ActionButtons from "./ActionButtons";

export default function Members() {
  const [selectedMembers, setSelectedMembers] = useState(membersList);

  const handleToggle = (member) => () => {
    const updatedMembers = selectedMembers.map((m) =>
      m.name === member.name ? { ...m, checked: !m.checked } : m
    );
    setSelectedMembers(updatedMembers);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add members to Front-end development team
      </Typography>
      <SearchBar />
      <MemberList
        members={selectedMembers}
        handleToggle={handleToggle}
      />
      <ActionButtons />
    </Paper>
  );
}
