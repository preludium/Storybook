import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Collapse from "./index";

storiesOf("Components", module)
    .add("Collapse", () => {
        const [open, setOpen] = useState(true);
        return (
            <>
                <button onClick={() => setOpen(!open)}>
                    Collapse
                </button>
                <Collapse open={open}
                          timeout={300}
                >
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id lacus augue. Nullam
                            vulputate nulla nec purus euismod, a malesuada mauris pellentesque. Aenean egestas convallis
                            dui, tincidunt feugiat nisl tincidunt id. Praesent non pellentesque ipsum, non fringilla
                            libero. Integer tellus arcu, sollicitudin ac libero dictum, pulvinar ullamcorper ex. Integer
                            porta nisi lorem, suscipit congue ipsum blandit id. Sed ac porttitor orci. Integer molestie
                            neque nibh, eget convallis nisl euismod a. In elementum rhoncus rhoncus. Ut laoreet commodo
                            nibh ut fermentum. Integer faucibus, orci sit amet vestibulum ornare, leo nisl varius nisi,
                            ac gravida massa nulla a nulla.
                        </p>
                        <p>
                            Mauris sed felis neque. Quisque a vulputate nibh. Mauris faucibus turpis ut imperdiet
                            pulvinar. Cras ut metus eros. Sed eu hendrerit diam. Ut eu lectus vel eros volutpat semper
                            ut ut risus. Pellentesque posuere tortor ut quam porta, sed convallis metus lacinia. Quisque
                            mattis nisi quis massa iaculis lacinia. Fusce sed magna tempor massa fringilla fermentum.
                        </p>
                        <p>
                            Aliquam quis mauris vitae diam ornare varius quis in felis. Curabitur scelerisque eget velit
                            sit amet commodo. Cras a ex auctor, imperdiet libero vel, gravida purus. Ut non sem vitae
                            ipsum tristique sollicitudin at sed ante. Ut nec sollicitudin diam. Aenean vitae fermentum
                            lectus, quis convallis lectus. Praesent vehicula lectus ac purus fringilla vestibulum. Nam
                            eleifend sollicitudin pellentesque.
                        </p>
                        <p>
                            Pellentesque scelerisque ipsum pretium, facilisis est quis, suscipit turpis. Donec neque
                            nisl, euismod finibus nisl non, sodales volutpat erat. Donec nec ex sed nisl tempus gravida
                            id a ipsum. Curabitur ultricies ut diam nec congue. In sit amet nisi a nisi consequat
                            tincidunt eu quis lorem. Nunc consectetur nisi non porttitor placerat. Sed vestibulum mi at
                            imperdiet bibendum. Nulla non ex luctus urna molestie faucibus nec efficitur sem. Integer
                            lobortis venenatis suscipit. Nulla felis tellus, tincidunt ac elit eget, semper dignissim
                            odio. Sed auctor purus in molestie blandit. Integer fermentum magna eget venenatis
                            tincidunt.
                        </p>
                        <p>
                            Nam eget elit sodales, elementum magna eu, pellentesque metus. Integer faucibus justo in
                            elit rhoncus aliquet. Vivamus vulputate sem eget ultrices tempus. Integer euismod tortor at
                            massa elementum finibus. Nam posuere eget sapien nec volutpat. Proin aliquam tempus quam,
                            vitae mollis dolor congue et. Nam viverra convallis enim non posuere. Sed mollis ipsum ac
                            arcu accumsan, accumsan placerat elit molestie. Vestibulum sollicitudin nisl quis sapien
                            dignissim tempus. Nullam nec pharetra lectus, vitae vehicula justo. Mauris at maximus arcu.
                            Pellentesque quis est diam. Curabitur lobortis ligula purus, et iaculis massa ornare ut.
                            Mauris hendrerit est et erat pellentesque, non ultricies lorem accumsan. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </Collapse>
                <div>
                    flaskfjaslkjaslfkjasldk
                </div>
            </>
        );
    });