import { CreateUserInterface, UpdateUserInterface } from "./interface/user";

//try catch を使うとエラーが発生した場合にcatchにエラーが渡される
//console log など絵を設定することでどの位置でエラーが発生しているか明確にできる

//user全件取得
export const FetchUsers = async () => {
  try {
    //バックエンドなどからデータを取得する
    const response = await fetch(`${process.env.VITE_API_URL}/users`);

    //渡されたデータをjsonを使って変換している
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error(err);
  }
};
//user一件取得
//(user_id: string) => {     呼び出しているところから引数を受け取る
export const FetchUser = async (user_id: string) => {
  //idを指定してデータを取得する
  const response = await fetch(`${process.env.VITE_API_URL}/users/${user_id}`);
  const jsonData = await response.json();
  return jsonData;
};

//user作成
export const CreateUser = async (data: CreateUserInterface) => {
  const response = await fetch(`${process.env.VITE_API_URL}/users`, {
    headers: { "Content-Type": "application/json" },

    //http method であるPOSTを指定している
    method: "POST",
    //dataをjson形式に変換している
    body: JSON.stringify({ data }),
  });
  const jsonData = await response.json();
  return jsonData;
};

//user更新
export const UpdateUser = async (
  user_id: string,
  data: UpdateUserInterface
) => {
  const response = await fetch(`${process.env.VITE_API_URL}/users/${user_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  const jsonData = await response.json();
  return jsonData;
};

//user削除
export const DeleteUser = async (user_id: string) => {
  const response = await fetch(`${process.env.VITE_API_URL}/users/${user_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
