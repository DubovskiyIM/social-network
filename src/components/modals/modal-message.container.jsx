import React, { useState } from 'react';
import { Modal, Button, Avatar } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const ModalMessage = ({ userName, userSurname, imgSrc, isOnline }) => {
	const [isVisible, showModal] = useState(false);

	let handleOk = () => {
    showModal(!isVisible);
	};

	let handleCancel = () => {
		showModal(!isVisible);
	};

	return (
		<div>
			<Button type='primary' onClick={showModal}>
				Send Message
			</Button>
			<Modal
				title='Send Message'
				visible={isVisible}
				onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="Send" type="primary" onClick={handleOk}>
            Send
          </Button>,
        ]}
			>
				<Avatar src={imgSrc} />
				<span
					style={{
						paddingLeft: 20,
					}}
				>{`${userName} ${userSurname}`}</span>
				<span>
					{isOnline ? (
						<span style={{ color: 'green', paddingLeft: 10 }}>Online</span>
					) : (
						<span style={{ color: 'grey', paddingLeft: 10 }}>Offline</span>
					)}
				</span>
				<TextArea
					style={{
						marginTop: 20,
					}}
				></TextArea>
			</Modal>
		</div>
	);
};

export default ModalMessage;
