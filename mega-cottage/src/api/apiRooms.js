import supabase from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Error! Rooms couldn't be loaded!");
    throw new Error("Rooms could not be found!");
  }

  return data;
}
