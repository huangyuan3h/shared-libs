import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@shared-libs/ui';

const meta: Meta<typeof CodeBlock> = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const exampleCode = `import { Button } from '@shared-libs/ui';

export default function MyComponent() {
  return (
    <Button>Click me</Button>
  );
}`;

export const Default: Story = {
  args: {
    children: exampleCode,
  },
};

export const WithLineNumbers: Story = {
  args: {
    children: exampleCode,
    showLineNumbers: true,
  },
};

export const WithoutCopyButton: Story = {
  args: {
    children: exampleCode,
    showCopyButton: false,
  },
};

export const CustomLanguage: Story = {
  args: {
    children: `function hello() {
  console.log("Hello, World!");
}`,
    language: 'javascript',
  },
};

export const LongCode: Story = {
  args: {
    children: `import { useState, useEffect } from 'react';
import { Button, Input, Label } from '@shared-libs/ui';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    console.log('Form data updated:', formData);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Input
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}`,
  },
};
