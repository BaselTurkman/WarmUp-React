import {
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function MemberItem({ member, handleToggle }) {
  return (
    <ListItem key={member.name} disablePadding>
      <ListItemButton onClick={handleToggle(member)}>
        <PersonIcon sx={{ marginRight: 2 }} />
        <Checkbox
          edge="start"
          checked={member.checked}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText primary={member.name} />
      </ListItemButton>
    </ListItem>
  );
}
