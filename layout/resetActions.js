import { Button, message } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useResetOfferMutation } from "services/offer/api";

function ResetActions({ setIsModalOpen, uid }) {
  const { push } = useRouter();
  const [resetOffer, { isLoading, error }] = useResetOfferMutation();
  useEffect(() => {
    error?.data &&
      message.error(
        error?.data?.message ||
          "We are having trouble recalculating offer. Please try again."
      );
  }, [error?.data?.message]);

  return (
    <div className="mt-3 d-flex justify-content-end">
      <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
      <Button
        className="ml-2"
        style={{
          backgroundColor: "#ffd147",
        }}
        loading={isLoading}
        onClick={async () => {
          const res = await resetOffer(uid);
          setIsModalOpen(false);
          if (res?.data?.data) {
            push("/prospect/" + res?.data?.data?.uid);
          }
        }}
      >
        Rest
      </Button>
    </div>
  );
}

export default ResetActions;
