import axios from "axios";

const API_URL = "/api/chat/";

// Create a group
const createGroup = async (groupData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "group", groupData, config);
  if (response.data) {
    let groups = localStorage.getItem("groups");
    if (groups) {
      groups = JSON.parse(groups);
    } else {
      groups = [];
    }
    groups = [...groups, response.data.group];
    localStorage.setItem("groups", JSON.stringify(groups));
    localStorage.setItem("group", JSON.stringify(response.data.group));
  }
  return response.data;
};

// Get groups
const getGroups = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "group", config);
  if (response.data) {
    localStorage.setItem("groups", response.data);
  }
  return response.data;
};

// Get specific group
const getGroup = async (groupId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + `group/${groupId}`, config);
  if (response.data) {
    if (response.data.isMember) {
      localStorage.setItem("group", JSON.stringify(response.data.group));
    }
  }
  return response.data;
};

// Join a specific group
const joinGroup = async (groupId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + `group/${groupId}/join`, config);
  if (response.data) {
    if (response.data.newMember) {
      let groups = localStorage.getItem("groups");
      if (groups) {
        groups = JSON.parse(groups);
      } else {
        groups = [];
      }
      groups = [...groups, response.data.group];
      localStorage.setItem("groups", JSON.stringify(groups));
    }
    localStorage.setItem("group", JSON.stringify(response.data.group));
  }
  return response.data;
};

module.exports = {
  getGroup,
  getGroups,
  createGroup,
  joinGroup,
};
