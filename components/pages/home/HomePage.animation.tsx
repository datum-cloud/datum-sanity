'use client'
import Matter from 'matter-js'
import React, { useEffect, useRef } from 'react'

export const HomePageAnimation = () => {
  const sceneRef = useRef(null)

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Composites,
      Constraint,
      Mouse,
      MouseConstraint,
      Common,
      Events,
      Body,
    } = Matter

    const currentRef = sceneRef.current
    if (!currentRef) return

    const engine = Engine.create()
    const world = engine.world
    const render = Render.create({
      element: currentRef,
      engine: engine,
      options: {
        width: 1000,
        height: 1100,
        wireframes: true,
        background: 'white',
      },
    })

    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)
    // // create stairs
    // let stairCount = (render.bounds.max.y - render.bounds.min.y) / 50

    // let stack = Composites.stack(
    //   0,
    //   0,
    //   stairCount + 2,
    //   1,
    //   0,
    //   0,
    //   function (x, y, column) {
    //     return Bodies.rectangle(x - 50, y + column * 50, 100, 1000, {
    //       isStatic: true,
    //       render: {
    //         fillStyle: '#ffffff',
    //       },
    //     })
    //   },
    // )

    // create obstacles
    const obstacles = Composites.stack(10, 0, 15, 3, 10, 10, function (x, y) {
      let sides = Math.round(Common.random(1, 8)),
        options = {
          render: {
            fillStyle: Common.choose([
              '#48f164',
              '#f5d259',
              '#f55a3c',
              '#063e7b',
              '#ececd1',
            ]),
          },
        }

      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              options,
            )
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(25, 30),
              options,
            )
          }
        case 1:
          return Bodies.polygon(x, y, sides, Common.random(25, 50), options)
      }
    })

    Composite.add(world, [obstacles])

    let timeScaleTarget = 1,
      lastTime = Common.now()

    Events.on(engine, 'afterUpdate', function (event) {
      var timeScale = (event.delta || 1000 / 60) / 1000

      // tween the timescale for slow-mo
      if (mouse.button === -1) {
        engine.timing.timeScale +=
          (timeScaleTarget - engine.timing.timeScale) * 3 * timeScale
      } else {
        engine.timing.timeScale = 1
      }

      // every 2 sec (real time)
      if (Common.now() - lastTime >= 2000) {
        // flip the timescale
        if (timeScaleTarget < 1) {
          timeScaleTarget = 1
        } else {
          timeScaleTarget = 0.05
        }

        // update last time
        lastTime = Common.now()
      }

      //   for (var i = 0; i < stack.bodies.length; i += 1) {
      //     var body = stack.bodies[i]

      //     // animate stairs
      //     Body.translate(body, {
      //       x: -30 * timeScale,
      //       y: -30 * timeScale,
      //     })

      //     // loop stairs when they go off screen
      //     if (body.position.x < -50) {
      //       Body.setPosition(body, {
      //         x: 50 * (stack.bodies.length - 1),
      //         y:
      //           25 +
      //           render.bounds.max.y +
      //           (body.bounds.max.y - body.bounds.min.y) * 0.5,
      //       })

      //       Body.setVelocity(body, {
      //         x: 0,
      //         y: 0,
      //       })
      //     }
      //   }

      for (let i = 0; i < obstacles.bodies.length; i += 1) {
        var body = obstacles.bodies[i],
          bounds = body.bounds

        // move obstacles back to the top of the screen
        if (bounds.min.y > render.bounds.max.y + 100) {
          Body.translate(body, {
            x: -bounds.min.x,
            y: -render.bounds.max.y - 300,
          })
        }
      }
    })

    // add mouse control and make the mouse revolute
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.6,
          length: 0,
          angularStiffness: 0,
          render: {
            visible: false,
          },
        },
      })

    Composite.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    })

    return () => {
      Render.stop(render)
      Runner.stop(runner)
      while (currentRef.firstChild) {
        currentRef.removeChild(currentRef.firstChild)
      }
    }
  }, [])

  return <div ref={sceneRef} className="w-full h-full overflow-hidden"></div>
}
