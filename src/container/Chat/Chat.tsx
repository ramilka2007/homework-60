import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import SendMessageForm from '../../components/SendMessageForm/SendMessageForm';

const Chat = () => {
  return (
    <>
      <div>
        <SendMessageForm />
      </div>
      <div>
        <Card sx={{ minWidth: 275, maxWidth: 400 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Username
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Date
            </Typography>
            <Typography variant="body2">Message</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Chat;
