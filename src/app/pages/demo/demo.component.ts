import { Component, OnInit } from '@angular/core'

import {
	Engine,
	Runner,
	Render,
	World,
	Constraint,
	MouseConstraint,
	Bodies,
} from 'matter-js'

@Component({
	selector: 'app-minimal',
	templateUrl: './demo.component.html',
	styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		this.demo()
	}

	demo() {
		var engine = Engine.create()

		var render = Render.create({
			element: document.body,
			engine: engine,
			options: {
				width: 800,
				height: 400,
				wireframes: false,
			},
		})

		var boxA = Bodies.rectangle(400, 200, 80, 80)
		var ballA = Bodies.circle(380, 100, 40, {})
		var ballB = Bodies.circle(460, 10, 40, {})
		var ground = Bodies.rectangle(400, 380, 810, 60, {
			isStatic: true,
		})

		World.add(engine.world, [boxA, ballA, ballB, ground])

		Engine.run(engine)
		Render.run(render)
	}
}
