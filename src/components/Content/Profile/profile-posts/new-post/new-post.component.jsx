import React from 'react'
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;


const NewPost = (props) => {
return (
  <div>
    <Form.Item>
      <TextArea rows={4} />
    </Form.Item>
    <Form.Item>
      <Button type="primary" style={{float: 'right'}}>
        Add Post
      </Button>
    </Form.Item>
  </div>
)
}

export default NewPost;