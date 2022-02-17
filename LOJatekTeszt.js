const { test } = QUnit;

QUnit.module("ellenorzes()", (hook) => {
  hook.before(() => {
    this.lojatek = new LOJatek(0);
  });
  test("Létezik e az ellenőrzés metódus?", (assert) => {
    assert.ok(this.lojatek.ellenorzes, "létezik");
  });

  test("függvény-e az ellenőrzés metódus?", (assert) => {
    assert.ok(typeof this.lojatek.ellenorzes === "function", "igen, függvény");
  });

  test("Minden lámpa felkapcsolva?", (assert) => {
    this.lojatek = new LOJatek(9);
    for (let index = 0; index < 9; index++) {
      assert.equal((lampak[index].allapot = true), true);
    }
  });

  test("Minden elem lekapcsolva?", (assert) => {
    this.lojatek = new LOJatek(0);
    for (let index = 0; index < 9; index++) {
      assert.equal((lampak[index].allapot = false), false);
    }
  });

  test("Néhány elem felkapcsolva[5]", (assert) => {
    this.lojatek = new LOJatek(5);
    for (let index = 4; index < 9; index++) {
      assert.equal((lampak[index].allapot = true), true);
    }
  });
});


QUnit.module("szomszedokvaltoztatasa()", (h) => {
    h.beforeEach(() => {
      this.lojatek = new LOJatek(0);
    });

    test("Létezik e a szomszédokváltoztatása metódus?", (assert) => {
  
        assert.ok(this.lojatek.szomszedokValtoztatasa,"létezik");
      });

      test("függvény-e a szomszédokváltoztatása metódus?", (assert) => {
        assert.ok(typeof this.lojatek.szomszedokValtoztatasa === "function", "igen, függvény");
      });

      test("Középső lámpát kapcsoljuk", (assert) => {
        this.lojatek = new LOJatek(0); 
        for (let index = 0; index < 9; index++) {
            lampak[index].allapot = true;
            
        }
        lojatek.szomszedokValtoztatasa;
        assert.ok(lampak[4].allapot,"felkapcsolva"
            
            );
            assert.ok(lampak[1].allapot,"felkapcsolva"
            
            );
            assert.ok(lampak[7].allapot,"felkapcsolva"
            
            );
           
      
      });

    
});