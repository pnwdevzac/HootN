import { Loader } from '@googlemaps/js-api-loader';
const loader = new Loader({
  apiKey: 'AIzaSyBsUG1qXWqJNxm41SDWvoQUesSj8C-gCmM',
  version: 'weekly',
  libraries: ['places'],
});
export default loader;