import supabase from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Error! Rooms couldn't be loaded!");
    throw new Error("Rooms could not be found!");
  }

  return data;
}

export async function deleteRooms(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error("Error! Rooms couldn't be deleted!");
    throw new Error("Rooms could not be deleted!");
  }

  return data;
}

export async function createRoom(newRoom) {
  const { data, error } = await supabase
    .from("rooms")
    .insert([newRoom])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be added");
  }

  return data;
}
