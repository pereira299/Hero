
import { renderToString } from "react-dom/server";

function Parser(data) {
    var data = renderToString(data);
    data = data.toString();
    data = data.replace('<div data-reactroot="">', "");
    data = data.substring(0, data.length - 6);
    return data;
}

export default Parser;