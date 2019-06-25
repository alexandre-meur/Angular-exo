

export class Todo{

  public isDone:boolean;
  public id:number;
  public static compteur=0;

  constructor(public title:string) {
    this.isDone = false;
    this.id = Todo.compteur;
    Todo.compteur++;
  };

}
