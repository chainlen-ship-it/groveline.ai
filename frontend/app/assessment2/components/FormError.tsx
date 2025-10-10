interface FormErrorProps {
  message: string;
  id?: string;
}

export function FormError({ message, id }: FormErrorProps) {
  if (!message) return null;

  return (
    <p className="text-red-600 text-sm mt-1" role="alert" id={id}>
      {message}
    </p>
  );
}
