import { List } from "@mui/material";
import MemberItem from "./MemberItem";

export default function MemberList({ members, handleToggle }) {
  return (
    <List>
      {members.map((member) => (
        <MemberItem member={member} handleToggle={handleToggle} />
      ))}
    </List>
  );
}
