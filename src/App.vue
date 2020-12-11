<template>
  <Top v-model="newList" />
  <TableUsers v-model="newList" />
</template>

<script>
import Top from "./components/Top";
import TableUsers from "./components/UserTable";
export default {
  name: "index",
  components: {
    Top,
    TableUsers,
  },
  data() {
    return {
      newList: [],
    };
  },
};
</script>
