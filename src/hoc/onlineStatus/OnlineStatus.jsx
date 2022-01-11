import React, { useEffect, useState } from "react";
import { Modal, notification } from "antd";
import { FrownOutlined, WifiOutlined } from "@ant-design/icons";

const DataConnectionAvailabiltyModal = (props) => {
  console.log(props);
  let [online, isOnline] = useState(navigator.onLine);
  let [child, setChildren] = useState();

  const OpenNotification = () => {
    notification.open({
      message: "Internet Connection Successful",
      description: "You are connected to the Internet",
      onClick: () => {},
      icon: (
        <WifiOutlined
          style={{ color: "#52c41a", fontSize: "30px", top: "10%" }}
        />
      ),
    });
  };
  const setOnline = () => {
    console.log("We are online!");
    isOnline(true);
  };
  const setOffline = () => {
    console.log("We are offline!");
    isOnline(false);
  };
  useEffect(() => {
    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);
    setChildren(props.children);
    // cleanup if we unmount
    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
  }, [online]);

  return (
    <>
      {child ? child : null}
      {online ? OpenNotification : null}
      <Modal
        icon="<ExclamationCircleOutlined />"
        title={<> No Internet Connection or Internet Connection Lost </>}
        centered
        closable={false}
        visible={!online}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ul style={{ width: "80%" }}>
            <li>
              {" "}
              <p>Check The Network Cable ,Modem and Router.</p>
            </li>
            <li>
              {" "}
              <p>Reconnect To Wifi.</p>
            </li>
            <li>
              {" "}
              <p>The refresh the page after connected to the internet</p>
            </li>
          </ul>

          <FrownOutlined style={{ color: "#52c41a", fontSize: "50px" }} />
        </div>

        <div></div>
      </Modal>
    </>
  );
};
export default DataConnectionAvailabiltyModal;
