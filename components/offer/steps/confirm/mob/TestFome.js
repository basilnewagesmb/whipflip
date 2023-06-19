import React from "react";
import { Form, Input, Button } from "antd";

function TestForm() {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Form
      onFinish={onFinish}
      scrollToFirstError={{
        behavior: "smooth",
        block: "center",
        inline: "center",
      }}
    >
      <Form.Item
        name="field1"
        label="Field 1"
        rules={[
          {
            required: true,
            message: "Please enter Field 1",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field2"
        label="Field 2"
        rules={[
          {
            required: true,
            message: "Please enter Field 2",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field3"
        label="Field 3"
        rules={[
          {
            required: true,
            message: "Please enter Field 3",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field4"
        label="Field 4"
        rules={[
          {
            required: true,
            message: "Please enter Field 4",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field5"
        label="Field 5"
        rules={[
          {
            required: true,
            message: "Please enter Field 5",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field6"
        label="Field 6"
        rules={[
          {
            required: true,
            message: "Please enter Field 6",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field7"
        label="Field 7"
        rules={[
          {
            required: true,
            message: "Please enter Field 7",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field8"
        label="Field 8"
        rules={[
          {
            required: true,
            message: "Please enter Field 8",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field9"
        label="Field 9"
        rules={[
          {
            required: true,
            message: "Please enter Field 9",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="field10"
        label="Field 10"
        rules={[
          {
            required: true,
            message: "Please enter Field 10",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TestForm;
