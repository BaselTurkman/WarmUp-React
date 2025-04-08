import { List } from "@mui/material";
import MemberItem from "./MemberItem";

export default function MemberList({ members, handleToggle }) {
  return (
    <List>
      {members.map((member, index) => (
        <MemberItem key={index} member={member} handleToggle={handleToggle} />
      ))}
    </List>
  );
}
