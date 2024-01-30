import { useEffect } from "react";
import { getRooms } from "../api/apiRooms";
import Table from "../features/Rooms/Table";

export default function Rooms() {
  // useEffect(() => {
  //   getRooms().then((data) => console.log(data));
  // }, []);
  return (
    <div>
      Rooms
      <Table />
    </div>
  );
}
