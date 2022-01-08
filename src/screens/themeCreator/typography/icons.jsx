import { Box } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import InfoIcon from "@mui/icons-material/Info";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import BackupIcon from "@mui/icons-material/Backup";
import SendIcon from "@mui/icons-material/Send";

const Icons = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <ImportContactsIcon />
      <InfoIcon />
      <AddCardIcon />
      <DeleteIcon />
      <EditIcon />
      <DownloadIcon />
      <FileDownloadDoneIcon />
      <FileUploadIcon />
      <UploadFileIcon />
      <BackupIcon />
      <SendIcon />
    </Box>
  );
};

export default Icons;
