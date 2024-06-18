import { TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import './SendMessageForm.css';

const SendMessageForm = () => {
  return (
    <form className="form">
      <TextField
        required
        style={{ width: 500, marginBottom: 30 }}
        label="Username"
        name="Author"
        id="author"
      />
      <Textarea
        required
        style={{ width: 500, marginBottom: 30 }}
        color="primary"
        minRows={3}
        variant="soft"
        size="lg"
        name="message"
        id="message"
        placeholder="Message"
      />

      <button
        type="submit"
        className='submitBtn'
      >
        Send
      </button>
    </form>
  );
};

export default SendMessageForm;
