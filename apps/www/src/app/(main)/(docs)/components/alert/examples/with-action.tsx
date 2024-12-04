"use client";

import { Alert, Button } from "@jamsr-ui/react";
import { CloseIcon, EyeClosedIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";

export const AlertWithAction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col gap-4">
      <Alert
        status="warning"
        action={
          <Button variant="light" color="warning">
            Renew Now!
          </Button>
        }
      >
        Your plan will expire soon, please renew your plan.
      </Alert>

      {isOpen && (
        <Alert
          status="danger"
          action={
            <div className="flex flex-row gap-2">
              <Button isIconOnly isRounded variant="light" color="success">
                <EyeClosedIcon className="size-5" />
              </Button>
              <Button
                onClick={handleClose}
                isIconOnly
                isRounded
                color="danger"
                variant="light"
              >
                <CloseIcon className="size-5" />
              </Button>
            </div>
          }
        >
          Your Pro plan has expired.
        </Alert>
      )}

      <Alert
        status="success"
        action={
          <Button variant="solid" color="success">
            Let's start!
          </Button>
        }
      >
        Your Pro plan has been activated.
      </Alert>
    </div>
  );
};
