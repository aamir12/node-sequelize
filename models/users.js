module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        defaultValue: "test@example.com",
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      //tableName:'userdata', //rename table name
      //timestamps: false, // to remove updatedAt,createdAt
      //updatedAt: false, // to remove only updatedAt
      //createdAt:false, // to remove only createdAt
      //updatedAt: "modified_at", // to rename updatedAt column
      //engine: "MYISAM", //db engine
    }
  );
};
