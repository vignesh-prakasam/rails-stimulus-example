class InsertAFewInterests < ActiveRecord::Migration[7.0]
  def change
    Interest.create(name: 'Hiking')
    Interest.create(name: 'Biking')
    Interest.create(name: 'Swimming')
    Interest.create(name: 'Running')
    Interest.create(name: 'Camping')
  end
end
