import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

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
  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/image/${imageName}`;

  const { data, error } = await supabase
    .from("rooms")
    .insert([{ ...newRoom, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be added");
  }

  // upload image
  console.log("test id", data.id, newRoom.id);

  const { error: storageError } = await supabase.storage
    .from("image")
    .upload(imageNames, newRoom.image);

  // delete the cabin if there was an error uploading images
  if (storageError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Image could be uploaded to the server!");
  }

  return data;
}
