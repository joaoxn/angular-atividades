import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-click-yes',
  standalone: true,
  imports: [],
  templateUrl: './click-yes.component.html',
  styleUrl: './click-yes.component.css'
})
export class ClickYesComponent implements AfterViewInit {
  @ViewChild("no") buttonNo!: ElementRef;

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', (event) => this.updateButton(event))
  }

  updateButton(event: MouseEvent) {
    const rect = this.buttonNo.nativeElement.getBoundingClientRect();
    const btnPos = new Position(rect.left + rect.width/2, rect.top + rect.height/2);
    const mousePos = new Position(event.clientX, event.clientY);
    if (this.distance(btnPos, mousePos) < 120) {
      this.pushButton(btnPos, mousePos, 40, rect.width, rect.height);
    }
  }

  coxinhaPaga() {
    alert("OBRIGADOOOOO!!!")
  }

  distance(pos1: Position, pos2: Position): number {
      return Math.sqrt((pos2.x - pos1.x)**2 + (pos2.y - pos1.y)**2)
  }

  pushButton(btnPos: Position, mousePos: Position, distance: number, width: number, height: number) {
    const direction = new Position(btnPos.x - mousePos.x, btnPos.y - mousePos.y);
    const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
    const unitVector = new Position(direction.x / length, direction.y / length);

    const newPos = new Position(btnPos.x + unitVector.x*distance, btnPos.y + unitVector.y*distance)

    this.limitToBorders(newPos, width, height)

    this.buttonNo.nativeElement.style.position = 'absolute';
    this.buttonNo.nativeElement.style.left = `${newPos.x - this.buttonNo.nativeElement.clientWidth / 2}px`;
    this.buttonNo.nativeElement.style.top = `${newPos.y - this.buttonNo.nativeElement.clientHeight / 2}px`;
  }

  limitToBorders(pos: Position, width: number, height: number) {
    pos.x = Math.max(pos.x, width)
    pos.y = Math.max(pos.y, height)
    pos.x = Math.min(pos.x, window.innerWidth-width)
    pos.y = Math.min(pos.y, window.innerHeight-height)
  }
}

class Position {
  x: number
  y: number

  constructor(left: number, top: number) {
    this.x = left;
    this.y = top;
  }
}