import Vue from "vue";
import Vssue from "vssue";
import "vssue/dist/vssue.css";
import GithubV3 from "@vssue/api-github-v3";
import config from "@/config.js"

Vue.use(Vssue, {
  api: GithubV3,
  ...config.vssue,
  ...config.oAuth
});
