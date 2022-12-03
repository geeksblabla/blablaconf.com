import { encode } from "universal-base64";
import { User } from "./db";
// Generate ticket using cloudinary API
export const getTicketImg = (user: User) => {
  if (!user) return "/img/ticket_placeholder.png";

  const name = user.name === null ? user.login : user.name;
  const FontSize = name.length > 20 ? 30 : 36;
  const userAvatar = `https://github.com/${user.login}.png`;
  const ticket_number =
    new Array(5 + 1 - (user.ticketNumber + "").length).join("0") +
    user.ticketNumber; // add zeros before ticket number
  const NameLayout = `l_text:Roboto_${FontSize}_bold:${name},co_rgb:FFFFFF,g_north_west,x_430,y_280`;
  const UserNameLayout = `l_text:Roboto_27:@${user.login},co_rgb:9A97A1,g_north_west,x_430,y_330`;
  const base64 = encode(userAvatar);

  const TicketNumber = `l_text:Arial_28_bold:№ ${ticket_number},co_rgb:4D3E7B,g_north_west,x_535,y_30,a_70/`;
  const RoundedAvatar = `https://res.cloudinary.com/dvapezchz/image/upload/w_460,h_460,c_fill,q_auto,f_webp,fl_awebp/l_fetch:${base64},w_460,h_460/w_460,h_460,c_thumb,r_max/Mask_Group_qglnkm.png`;
  const base = encode(RoundedAvatar);

  const AvatarLayout = `l_fetch:${base},g_north_west,x_290,y_270,w_120,h_120`;
  const LayoutGenderTemplate = "v1632753083/ticket_template_2021_rmpzyk.png";
  // user.gender === "boy"
  //   ? "v1601647683/ticket_boy_template_r4m0xf.png"
  //   : "v1601647684/ticket_girl_template_w45a2r.png";
  return `https://res.cloudinary.com/duko2tssr/image/upload/${NameLayout}/${UserNameLayout}/${TicketNumber}/${AvatarLayout}/${LayoutGenderTemplate}`;
};

export const getTicketGraphImg = (user: User) => {
  const ticket = getTicketImg(user);
  return `https://res.cloudinary.com/demo/image/fetch/w_1200,h_630,c_pad,b_rgb:6955CB/${ticket}`;
};
