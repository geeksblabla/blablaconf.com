export const getTicketImg = (
  user = { name: "YourName", username: "@username" }
) => {
  return `https://res.cloudinary.com/dvapezchz/image/upload/c_scale,l_text:montserrat_100:${user.name}%20,w_600,x_-700,y_-380/c_scale,l_text:montserrat_40:${user.username}%20,w_300,x_-720,y_-250/v1601087114/Mask_Group_qglnkm.png`;
};
