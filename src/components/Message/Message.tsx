import React from 'react';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { MessageType } from '../../../types';

interface MessageProps {
  info: MessageType;
}

const Message: React.FC<MessageProps> = React.memo(
  ({ info }) => {
    const messageDate = (datetime: Date) => {
      const date = new Date(datetime);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()},
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    };
    return (
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <h2 style={{ margin: 0 }}>{info.author}</h2>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {messageDate(info.datetime)}
          </Typography>
          <hr />
          <Typography variant="body2">
            <h4>{info.message}</h4>
          </Typography>
        </CardContent>
      </Card>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.info !== nextProps.info;
  },
);

export default Message;
