import { Toast } from "jamsrui/toast";

export const toastManager = Toast.createToastManager();

export const ToastList = () => {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast
      key={toast.id}
      toast={toast}
      variant={toast.type as any}
    >
      <Toast.Content>
        <Toast.Title />
        <Toast.Description />
        <Toast.Close aria-label="Close" />
      </Toast.Content>
    </Toast>
  ));
};
