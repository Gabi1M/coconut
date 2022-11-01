import React from 'react';

import { Card } from '@coconut/generic';
import { Message } from '@coconut/models';

import MessageContent from './content';
import MessageDetails from './details';
import MessageTitle from './title';

interface Props {
    message: Message;
}

const MessageCard = ({ message }: Props) => (
    <Card>
        <MessageTitle
            subject={message.data.subject}
            author={message.data.author}
            messageType={message.data.type}
        />
        <MessageContent html={message.data.body_html} />
        <MessageDetails
            author={message.data.author}
            subreddit={message.data.subreddit_name_prefixed}
            messageType={message.data.type}
        />
    </Card>
);

export default MessageCard;
