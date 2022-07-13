import PermissionType from "./PermissionType";

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
};

export const DataBase: DataBaseItem[] = [
  {
    email: "mv@123.com",
    password: "123",
    permission: PermissionType.ADMIN
  },
  {
    email: "user1@123.com",
    password: "123",
    permission: PermissionType.USER
  }
];
